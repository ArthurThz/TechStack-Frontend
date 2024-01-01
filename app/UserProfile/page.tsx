import React from 'react'
import Input from '../components/Layout/Input/Input'
import Button from '../components/Layout/Button/Button'

const UserProfile = () => {

  const handleOnClick = () =>{
    return ""
  }
  return (
    <div className='w-full h-full flex flex-col items-center p-6 overflow-y-auto bg-woodsmoke-950'>
        {/* Profile pictture and total amount of posts */}
        <div className='w-full flex flex-row p-10 items-center justify-around'>
            <div className="flex flex-col items-center">
            {/* Profile picture */}
            <div className='w-[200px] h-[200px] bg-green-haze-500 rounded-full mb-2'></div>
            {/* Professional role */}
            <div className="w-auto h-auto p-1 text-md text-white text-center tracking-wider">
                <p>Arthur Theodoro</p>
                <p>Front End Developer</p>
            </div>
            
            </div>
        {/* Total Amount of posts */}
        <div className="w-auto h-auto flex flex-col items-center justify-center gap-4 text-white">
            <h1 className="text-6xl font-bold">0</h1>
            <p className='text-xl'>Posts</p>
        </div>
        </div>
        <div className="w-full h-auto flex px-5 flex-row items-center gap-5 justify-end">
        <Button label='Editar' variant='secondary' classname='hidden' onclick={handleOnClick}/>
        <Button label='Confirmar' variant='secondary' onclick={handleOnClick}/>
        <Button label='Cancelar' variant='secondary' onclick={handleOnClick}/>

        </div>
        <div className="w-full h-auto flex flex-row items-center gap-7 p-6">


        <Input label='Nome' name='username' type='text' placeholder='Arthur'disabled />
        <Input label='Sobrenome' name='userlastname' type='text' placeholder='Theodoro' disabled />
        </div>
        <div className="w-full h-auto flex flex-row items-center gap-7 p-6">


        <Input label='CPF' name='cpf' type='text' placeholder='12345678910' disabled />
        <Input label='Telefone' name='phone' type='text' placeholder='(11) 98888-8888' disabled />
        </div>
        <div className="w-full h-auto flex flex-row items-center gap-7 p-6">


        <Input label='Email' name='mail' type='text' placeholder='arthur@mail.com' disabled />
        <Input label='Profissão' name='role' type='text' placeholder='Front-end Developer' disabled />
        </div>
    </div>
  )
}

export default UserProfile