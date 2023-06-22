import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Header() {
  return (
    <header className="z-20 flex w-full max-w-7xl items-center justify-between object-cover px-4">
      <div>
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/matheuspinh"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/matheuspin/"
        />
      </div>
      <div className="flex items-center text-sm text-gray-200">
        <Link href="https://wa.me/5521991438304" className="cursor-pointer">
          <p className="hidden uppercase md:inline-flex">Mande uma mensagem</p>
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            network="whatsapp"
            url="https://wa.me/5521991438304"
          />
        </Link>
        <Link href="https://wa.me/5521991438304" className="cursor-pointer">
          <p className="hidden uppercase md:inline-flex">
            Ou se preferir um E-mail
          </p>
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            network="email"
            url="https://mail.google.com/mail/u/0/?fs=1&to=matheus.rj.pinheiro@gmail.com&tf=cm"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
