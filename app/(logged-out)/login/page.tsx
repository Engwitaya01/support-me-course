
"use client"
//rfc
import React from 'react'   
import { CardDescription ,CardHeader ,CardTitle ,CardContent  ,Card ,CardFooter} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PersonStandingIcon } from 'lucide-react'



export default function LoginPage() {
  return <>   
     <PersonStandingIcon size ={50} />
     <Card className=' w-full  max-w-sm  '>
        <CardHeader>
          <CardTitle>Login</CardTitle>
    
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          login form
        </CardContent>
        <CardFooter className='justify-between'>
         <small>Don't have an account? </small>
         <Button asChild variant="outline" size="sm">
            <a href="/sign-up">Sign Up</a>

         </Button>
        </CardFooter>
     </Card>
      </>
  
}   




