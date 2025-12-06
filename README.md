# LUHMLLO

[![Go Report Card](https://goreportcard.com/badge/github.com/LUHMLLO/luhmllo)](https://goreportcard.com/report/github.com/LUHMLLO/luhmllo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Building tools to understand how they work. If they're useful to others, even better.

## The libraries

**Lilycat** and **Zimba** started as side projects to figure out how things work. Built them out of curiosity, kept using them because they're useful.

Lilycat is minimal CSS that gets out of the way. Zimba is TypeScript utilities for common UI patterns - draggable elements, mouse followers, dropdowns. Nothing fancy, just tools that work.

Check them out on JSR:

- [Lilycat on JSR](https://jsr.io/@luhmllo/lilycat)
- [Zimba on JSR](https://jsr.io/@luhmllo/zimba)

## This repo

My personal site and playground for testing Lilycat and Zimba in real use. Go serves the static files—TypeScript and CSS do the work on the frontend.

### Prerequisites

- [Go](https://golang.org/doc/install) (1.24+)
- [Deno](https://deno.land/), [Node.js](https://nodejs.org/), or [Bun](https://bun.sh/) (for building frontend assets)

### Running locally

```bash
# Clone the repo
git clone https://github.com/LUHMLLO/luhmllo.git
cd luhmllo

# Build the frontend
cd kit
deno run build.ts  # or: node build.ts / bun build.ts
cd ..

# Run the Go server
go run main.go
```

The server will start at `http://localhost:8080`.

### Stack

- **Server**: Go (fast HTTP server for static files)
- **Build**: TypeScript build scripts in `/kit`
- **Frontend**: TypeScript + Lilycat CSS + Zimba utilities
- **Runtime**: Deno/Node/Bun for builds, Go for serving

### Philosophy

Less is more. Vanilla solutions over dependencies. Simple code over clever code. If a file hits 500+ lines, it's time to refactor.

Go keeps the server simple and fast. TypeScript and CSS handle everything else without heavy frameworks.

## Contributing

Found a bug? Have an idea? Open an issue. PRs welcome if they align with the keep-it-simple philosophy.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
