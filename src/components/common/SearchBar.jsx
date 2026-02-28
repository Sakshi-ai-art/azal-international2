import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export default function SearchBar() {
  const { setSearch } = useContext(AppContext)

  return (
    <input
      placeholder="Search collections..."
      style={{ padding: "14px", width: "100%", marginBottom: "30px" }}
      onChange={e => setSearch(e.target.value)}
    />
  )
}