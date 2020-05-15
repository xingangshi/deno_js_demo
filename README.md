# deno_js_demo

---

Some simple demos use [deno](https://deno.land/).

[Github-Deno](https://github.com/denoland/deno): A secure runtime for JavaScript and TypeScript.

[Deno-oak](https://github.com/oakserver/oak): A middleware framework for Deno's net server.

## Install deno:
> [Install deno](https://github.com/denoland/deno_install)

> If you install deno Ok, you can run `$ deno run https://deno.land/std/examples/welcome.ts`
>
> Welcome info will show for you.


## Demo-1 : A simple deno demo
> [hello_deno.ts](/1_hello_deno.ts)

> run use `$deno run 1_hello_deno.ts`

## Demo-2 : A deno website demo
> [deno_web.ts](/2_deno_web.ts)

> run use `$deno run --allow-net 2_deno_web.ts`

## Demo-3 : Deno website with router
> [deno_with_router.ts](/3_deno_with_router.ts)
> 
> [views/index.html](/views/index.html)

> run use `$deno run -A 3_deno_with_router.ts`
