export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-light': '#e0f2fe',
        'bg-body': '#ffffff',
        'bg-surface': '#f9fafb',
        'text-main': '#111827',
        'text-muted': '#6b7280',
        graphite: '#111111',
      },
      boxShadow: {
        'soft': '0 10px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 20px 40px rgba(0, 0, 0, 0.04)',
        'active': '0 20px 40px rgba(59, 130, 246, 0.3)',
      },
      borderRadius: {
        'lg': '32px',
        'md': '20px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
