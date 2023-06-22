import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Header() {
  return (
    <div className="z-20 flex w-full max-w-7xl items-center justify-between object-cover px-4">
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
      <div className="flex items-center space-x-3 text-sm text-gray-200">
        <div>
          <p className="hidden uppercase md:inline-flex">Mande uma mensagem</p>
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            network="whatsapp"
            url="https://wa.me/5521991438304"
            className="cursor-pointer"
          />
        </div>
        <div>
          <p className="hidden uppercase md:inline-flex">
            Ou se preferir um E-mail
          </p>
          <SocialIcon
            fgColor="gray"
            url="https://mail.google.com/mail/u/0/?fs=1&to=matheus.rj.pinheiro@gmail.com&tf=cm"
            bgColor="transparent"
            network="email"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
