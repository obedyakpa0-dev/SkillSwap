export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto w-full ${className}`}>
      {children}
    </div>
  );
}
