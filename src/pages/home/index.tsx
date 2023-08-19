import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import preview from '@/assets/home.png'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUserNameForm />
      </Hero>

      <Preview>
        <Image
          height={400}
          quality={100}
          priority 
          src={preview}
          alt='Calendário simbolizando a aplicação em funcionamento'
        />
      </Preview>
    </Container>
  )
}
