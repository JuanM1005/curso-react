const styles = {
  base: 'flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100',

  primary:
    'bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 disabled:hover:bg-blue-600',

  secondary:
    'border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 disabled:hover:bg-white',

  ghost:
    'font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:hover:bg-transparent disabled:hover:text-slate-500',

  fullWidth: 'w-full',
};

export default styles;
