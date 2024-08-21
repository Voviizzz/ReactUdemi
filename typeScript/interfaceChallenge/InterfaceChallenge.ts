interface Api {
   userId: number,
   id: number,
   title: string,
   info: {
      desc: string,
      isActive: boolean
   },
   tags: [
      {
         name: string,
         value: number
      }
   ]
}