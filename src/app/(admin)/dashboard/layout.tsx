export default function Layout({
  children,
  product,
  analytics,
  payments,
  trywopage,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
  trywopage: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center">
        {product}
        {analytics}
      </div>
      <div>{payments}</div>
      <div>{trywopage}</div>
    </div>
  );
}
