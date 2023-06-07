import fetchContributers from "@/utils/fetchContributers"

const Community = async () => {
  const contributors = await fetchContributers()

  return (
    <div className="px-2 py-4 bg-wite">
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-[3rem] text-center my-2 mb-10">Meet Our Contributors</h2>

      <ul className="relative flex flex-wrap justify-center w-full gap-12 py-7">
        {contributors?.map(
          (contributor) =>
            contributor &&
            contributor.type !== 'Bot' && ( //to remove bot from the contributors list
              <li className="overflow-hidden transition-all duration-150 ease-in-out border-2 rounded-full w-fit border-dark-secondary group hover:scale-110 focus:scale-110" key={contributor.id}>
                <a
                  className="block w-20 xs:w-[90px] md:w-[100px] h-20 xs:h-[90px] md:h-[100px] rounded-full "
                  href={contributor.html_url}
                  target="_blank"
                  title={`${contributor.login}`}
                >
                  <img
                    alt={contributor.login}
                    className="w-full h-auto rounded-full grayscale group-hover:grayscale-0 group-focus:grayscale-0"
                    loading="lazy"
                    src={contributor.avatar_url}
                  />
                </a>
              </li>
            )
        )}
      </ul>

    </div>
  )
}

export default Community
