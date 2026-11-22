import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const id = "rules-vs-policies"
const skills = fileURLToPath(new URL("./skills", import.meta.url))
const path = fileURLToPath(new URL(`./skills/${id}/SKILL.md`, import.meta.url))

export default {
  id,
  async setup(ctx) {
    const source = await readFile(path, "utf8")
    const match = /^---\r?\nname: (.+)\r?\ndescription: (.+)\r?\n---\r?\n([\s\S]*)$/.exec(source)
    if (!match) throw new Error(`Invalid skill frontmatter: ${path}`)

    const [, name, description, body] = match
    await ctx.skill.transform((editor) => {
      if (!editor.get(id)) editor.add({ id, name, description, path, content: body.trim() })
    })
  },
  async server() {
    return {
      async config(config) {
        config.skills ??= {}
        config.skills.paths ??= []
        if (!config.skills.paths.includes(skills)) config.skills.paths.push(skills)
      },
    }
  },
}
