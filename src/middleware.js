export function middleware(request) {
    const token = request.cookies.get('token')?.value
    
    console.log(token,"dfkdfjk")
    console.log(request.nextUrl.pathname)
    // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    //   return Response.redirect(new URL('/dashboard', request.url))
    // }
   
    // if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    //   return Response.redirect(new URL('/login', request.url))
    // }
  }
   