import axios from 'axios'
import type { GitHubRepo } from '@/types'

const GITHUB_API_BASE = 'https://api.github.com'

function normalizeGitHubUsername(value: string): string {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return ''
  }

  try {
    const url = new URL(trimmedValue)
    const pathParts = url.pathname.split('/').filter(Boolean)

    if (url.hostname === 'api.github.com' && pathParts[0] === 'users') {
      return pathParts[1] || ''
    }

    if (url.hostname.endsWith('github.com')) {
      return pathParts[0] || ''
    }
  } catch {
    // Plain usernames are expected here.
  }

  return trimmedValue.replace(/^@/, '')
}

/**
 * Fetch public repositories from a GitHub user.
 * Sorted by most recently updated, limited to 12 repos.
 * Returns empty array on error (graceful fallback).
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const normalizedUsername = normalizeGitHubUsername(username)

  if (!normalizedUsername) {
    console.warn('[githubService] No GitHub username provided.')
    return []
  }

  try {
    const response = await axios.get<GitHubRepo[]>(
      `${GITHUB_API_BASE}/users/${encodeURIComponent(normalizedUsername)}/repos`,
      {
        params: {
          sort: 'updated',
          direction: 'desc',
          per_page: 12,
          type: 'owner',
        },
        timeout: 10000,
      }
    )

    return response.data.filter((repo) => !repo.fork)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `[githubService] GitHub API error: ${error.response?.status} — ${error.message}`
      )
    } else {
      console.error('[githubService] Unexpected error:', error)
    }
    return []
  }
}
