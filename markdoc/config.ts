import type { Config } from "@markdoc/markdoc"

const config: Config = {
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        type: {
          type: String,
          default: "note",
          matches: ["note", "warning", "success"],
        },
      },
    },
  },
}

export default config
