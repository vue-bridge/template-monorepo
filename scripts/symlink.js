const { existsSync } = require('fs')
const { symlink } = require('node:fs/promises')
const { argv } = require('process')
const { resolve} = require('path')


main()

async function main() {
  const from = argv[2]
  const to = argv[3]

  const fromPath = resolve(process.cwd(), from)
  const toPath = resolve(process.cwd(), to)
  
  if (!existsSync(from)) {
    console.error(`⚠️ ERROR: path not found: ${from} relative to ${process.cwd()}`)
    process.exit(1)
  }
  
  if (!existsSync(toPath)) {
    await symlink(fromPath, toPath, 'junction')
  } else {
    console.info(`Symlink in '${toPath}' already exists.`)
  }

}
