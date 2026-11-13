<script lang="ts">
  interface Props {
    href: string;
    text: string;
    cta: string;
  }

  let { href, text, cta }: Props = $props();
</script>

<div
  class="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-[#ec3750] px-4 py-2 text-center text-sm font-bold text-white shadow-[0_-2px_8px_rgba(0,0,0,0.25)] md:text-base"
  role="status"
>
  <span>{text}</span>
  <a
    {href}
    class="rounded-full bg-white px-3 py-0.5 text-[#ec3750] underline-offset-2 hover:underline"
    >{cta}</a
  >
</div>
