import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import Layout from "../components/Layout"

// @ts-ignore
const RemoteProductPage = dynamic(() => import('remote/ProductPage'))

export default function ProductPage(props: { hello: string }) {
  return (
    <Layout>
      {/* @ts-ignore */}
      <RemoteProductPage {...props} />
    </Layout>
  )
}

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  // @ts-ignore
  const remoteProductPage = await import('remote/ProductPage')

  console.log('HOME getServerSideProps runs')
  if (remoteProductPage.getServerSideProps) {
    return remoteProductPage.getServerSideProps(ctx)
  }

  return {
    props: { hello: 'world' },
  }
}