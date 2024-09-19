
export default function ProductPage({ name }: { name: string }) {
  return <h1>Product Page - {name}</h1>
}

export const getServerSideProps = async () => {
  const name = 'Smith'
  console.log('REMOTE getServerSideProps runs', name)
  return {
    props: { name },
  }
}