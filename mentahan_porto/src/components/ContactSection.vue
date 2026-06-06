<script setup lang="ts">
import { ref } from 'vue';
import { profile } from '@/src/data/profile';
import { Mail, Github, Linkedin, Send, AlertCircle, CheckCircle2, MessageSquareCode } from 'lucide-vue-next';

const name = ref('');
const email = ref('');
const message = ref('');
const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async () => {
  if (!name.value || !email.value || !message.value) {
    submitStatus.value = 'error';
    return;
  }
  
  isSubmitting.value = true;
  submitStatus.value = 'idle';
  
  // Simulate API send delay
  setTimeout(() => {
    isSubmitting.value = false;
    submitStatus.value = 'success';
    // Clear inputs
    name.value = '';
    email.value = '';
    message.value = '';
  }, 1200);
};
</script>

<template>
  <section 
    id="contact" 
    class="py-24 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f]"
  >
    <!-- Header -->
    <div class="mb-16" id="contact-section-header">
      <div class="font-mono text-5xl md:text-7xl font-extrabold text-neutral-800 tracking-tighter mb-4 select-none">
        06 /
      </div>
      <h2 class="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
        Let's Connect & Collaborate
      </h2>
      <div class="h-1 w-12 bg-[#b23a3a] mb-4"></div>
      <p class="font-mono text-xs text-neutral-500 max-w-sm leading-relaxed">
        Silakan hubungi saya untuk kolaborasi proyek, peluang magang, atau sekadar berdiskusi mengenai teknologi perangkat lunak.
      </p>
    </div>

    <!-- Contact Grid and form structure -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
      
      <!-- Left Column: Contact info & accounts -->
      <div class="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-info-column">
        <div class="space-y-6">
          <h3 class="text-xl font-bold font-sans text-neutral-200">
            Reach Out Directly
          </h3>
          <p class="text-sm text-neutral-400 leading-relaxed font-sans max-w-sm">
            Saya selalu terbuka untuk berdiskusi tentang pengembangan produk website, UI kustom bebas-kontras, sirkuit IoT, atau database terstruktur.
          </p>

          <!-- Vertical list of links styled elegantly in Neo-Brutalist rows -->
          <div class="space-y-3 pt-4" id="contact-links-list">
            <!-- Email link -->
            <a 
              :href="`mailto:${profile.contact.email}`" 
              class="flex items-center justify-between p-4 bg-[#181818] border border-[#2f2f2f] hover:border-[#b23a3a] text-neutral-300 hover:text-white transition-all duration-300 shadow-[2px_2px_0px_#121212] hover:shadow-[3px_3px_0px_#9f3434] group"
              id="link-box-email"
            >
              <div class="flex items-center gap-3">
                <Mail class="w-4 h-4 text-[#b23a3a]" />
                <span class="font-mono text-xs tracking-wider uppercase">Email</span>
              </div>
              <span class="text-xs text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors">
                {{ profile.contact.email }}
              </span>
            </a>

            <!-- GitHub link -->
            <a 
              :href="profile.contact.github" 
              target="_blank" 
              class="flex items-center justify-between p-4 bg-[#181818] border border-[#2f2f2f] hover:border-[#b23a3a] text-neutral-300 hover:text-white transition-all duration-300 shadow-[2px_2px_0px_#121212] hover:shadow-[3px_3px_0px_#9f3434] group"
              id="link-box-github"
            >
              <div class="flex items-center gap-3">
                <Github class="w-4 h-4 text-[#b23a3a]" />
                <span class="font-mono text-xs tracking-wider uppercase">GitHub</span>
              </div>
              <span class="text-xs text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors">
                github.com/developer
              </span>
            </a>

            <!-- LinkedIn link -->
            <a 
              :href="profile.contact.linkedin" 
              target="_blank" 
              class="flex items-center justify-between p-4 bg-[#181818] border border-[#2f2f2f] hover:border-[#b23a3a] text-neutral-300 hover:text-white transition-all duration-300 shadow-[2px_2px_0px_#121212] hover:shadow-[3px_3px_0px_#9f3434] group"
              id="link-box-linkedin"
            >
              <div class="flex items-center gap-3">
                <Linkedin class="w-4 h-4 text-[#b23a3a]" />
                <span class="font-mono text-xs tracking-wider uppercase">LinkedIn</span>
              </div>
              <span class="text-xs text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors">
                linkedin.com/student
              </span>
            </a>
          </div>
        </div>

        <!-- Status Widget (Informational & architectural design) -->
        <div class="hidden lg:block border border-[#2f2f2f] bg-[#121212] p-5" id="status-card">
          <div class="flex items-center gap-2 mb-2" id="status-card-header">
            <span class="inline-block w-2 h-2 rounded-full bg-[#b23a3a] animate-pulse"></span>
            <span class="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">SYSTEM_INFO</span>
          </div>
          <p class="text-[10px] font-mono text-neutral-500 leading-relaxed uppercase">
            Active Response Rate: ~24 Hours<br />
            Preferred Format: Email / GitHub Issue<br />
            Status: Accepting Projects
          </p>
        </div>
      </div>

      <!-- Right Column: Form message -->
      <div class="lg:col-span-7" id="contact-form-column">
        <form 
          @submit.prevent="handleSubmit" 
          class="bg-[#181818] border border-[#2f2f2f] p-6 sm:p-8 space-y-6 shadow-[3px_3px_0px_#121212]"
          id="web-contact-form"
        >
          <div class="flex items-center gap-2 border-b border-[#2f2f2f] pb-4 mb-4" id="form-header">
            <MessageSquareCode class="w-4 h-4 text-[#b23a3a]" />
            <h3 class="text-sm font-mono uppercase tracking-widest text-neutral-300">
              Instant Dispatch Form
            </h3>
          </div>

          <!-- Name Field -->
          <div class="space-y-1.5" id="form-group-name">
            <label for="name" class="block text-xs font-mono uppercase tracking-widest text-neutral-400">
              Your Name / Nama Lengkap
            </label>
            <input 
              v-model="name"
              type="text" 
              id="name" 
              required
              placeholder="e.g. John Doe"
              class="w-full bg-[#0f0f0f] border border-[#2f2f2f] focus:border-[#b23a3a] text-neutral-200 text-sm p-3.5 outline-none font-mono transition-colors"
            />
          </div>

          <!-- Email Field -->
          <div class="space-y-1.5" id="form-group-email">
            <label for="email" class="block text-xs font-mono uppercase tracking-widest text-neutral-400">
              Email Address / Alamat Surel
            </label>
            <input 
              v-model="email"
              type="email" 
              id="email" 
              required
              placeholder="e.g. email@domain.com"
              class="w-full bg-[#0f0f0f] border border-[#2f2f2f] focus:border-[#b23a3a] text-neutral-200 text-sm p-3.5 outline-none font-mono transition-colors"
            />
          </div>

          <!-- Message Field -->
          <div class="space-y-1.5" id="form-group-message">
            <label for="message" class="block text-xs font-mono uppercase tracking-widest text-neutral-400">
              Message / Pesan Anda
            </label>
            <textarea 
              v-model="message"
              id="message" 
              rows="5"
              required
              placeholder="Write your message detail here..."
              class="w-full bg-[#0f0f0f] border border-[#2f2f2f] focus:border-[#b23a3a] text-neutral-200 text-sm p-3.5 outline-none font-mono transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Status Banner Notifications -->
          <div 
            v-if="submitStatus === 'success'"
            class="p-4 bg-emerald-900/15 border border-emerald-500/50 text-emerald-400 font-mono text-xs tracking-wider uppercase flex items-center gap-2.5 animate-fade-in"
            id="notif-success"
          >
            <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Pesan Berhasil Terkirim. Terima kasih atas ketertarikan Anda!</span>
          </div>

          <div 
            v-if="submitStatus === 'error'"
            class="p-4 bg-rose-900/15 border border-rose-500/50 text-rose-400 font-mono text-xs tracking-wider uppercase flex items-center gap-2.5 animate-fade-in"
            id="notif-error"
          >
            <AlertCircle class="w-5 h-5 text-rose-500 shrink-0" />
            <span>Mohon isi semua bidang formulir dengan benar.</span>
          </div>

          <!-- Action Button -->
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="w-full font-mono text-xs tracking-wider uppercase font-bold py-4 px-6 bg-[#b23a3a] border border-[#b23a3a] text-white flex items-center justify-center gap-2 shadow-[4px_4px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#121212] transition-all duration-200 disabled:opacity-50 cursor-pointer text-center"
            id="btn-form-submit"
          >
            <span v-if="isSubmitting">Processing Dispatch...</span>
            <span v-else class="flex items-center gap-2">
              Send Message
              <Send class="w-4 h-4" />
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
