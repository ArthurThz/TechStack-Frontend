'use client'

import React, { useState } from 'react'
import Input from '../components/Layout/Input/Input'
import Button from '../components/Layout/Button/Button'
 

const UserProfile = () => {
  const [hideOptions,setHideOptions] = useState("hidden")
  const [hideEdit,setHideEdit] = useState("block")
  const [inputStatus,setInputStatus] = useState(true)
 


  const data = ["Arthur","Theodoro","12345678910","(11) 98888-8888","arthur@mail.com","Front-end Developer"]

  const inputField = ["nome","sobrenome","cpf","telefone","email","profissao"]




  const showOptions = () =>{

    if(hideOptions === "hidden"){
      setHideOptions("block")
      setHideEdit("hidden")
      setInputStatus(false)
    } else{
      setHideOptions("hidden")
      setHideEdit("block")
      setInputStatus(true)
    }
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
        <Button label='Editar' variant='secondary' classname={hideEdit}  onclick={showOptions}/>
        <Button label='Confirmar' variant='secondary' classname={hideOptions} onclick={() => ""} />
        <Button label='Cancelar' variant='secondary' classname={hideOptions} onclick={showOptions}/>

        </div>

        
        <div className="w-full h-auto grid grid-cols-2 grid-rows-3 gap-7 p-6">

        {data.map((userdata,index) => (
          
          <Input key={index} label='Nome' name='username' type='text' placeholder={userdata} disabled={inputStatus} />
          
        ))}
          
        
        {/* <Input label='Sobrenome' name='userlastname' type='text' placeholder='Theodoro' disabled={inputStatus} />
        <Input label='CPF' name='cpf' type='text' placeholder='12345678910' disabled={inputStatus} />
        <Input label='Telefone' name='phone' type='text' placeholder='(11) 98888-8888' disabled={inputStatus} />
        <Input label='Email' name='mail' type='text' placeholder='arthur@mail.com' disabled={inputStatus} />
        <Input label='Profissão' name='role' type='text' placeholder='Front-end Developer' disabled={inputStatus} /> */}
        </div>

       
    </div>
  )
}

export default UserProfile