rewrites: async () => {
    return [
      {
        source: "/dir/:customPage",
        destination: "/dir/:customPage/index.html",
      }
    ]
}