
export default function ProductPage() {
  return <h1>Product Page</h1>
}

export const getServerSideProps = async () => {
  console.log('REMOTE getServerSideProps runs')
  return {
    props: {},
  }
 }