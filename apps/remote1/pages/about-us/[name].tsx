import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"

export default function AboutUs({ name }: { name: string }) {
  return <h1>Meet {name}</h1>
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          name: 'Felipe',
        },
      }, // See the "paths" section below
      {
        params: {
          name: 'Smith',
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const name = context.params?.name as string
  console.log('getStaticProps', name)
  return { props: { name: name ?? 'Stranger' } }
}) satisfies GetStaticProps<{
  name: string
}>