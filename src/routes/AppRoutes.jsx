import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Collections from "../pages/Collections"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}