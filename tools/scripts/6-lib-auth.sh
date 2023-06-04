echo "🚧 auth shared feature";
nx g library auth --buildable --directory=shared --importPath=@ab/auth --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='shared, page'
nx g c auth --project=shared-auth --flat --type=Widget --skipTests=false --export=true
nx g c login --project=shared-auth --flat --type=Page --skipSelector --skipTests=false
nx g c login --project=shared-auth --type=Form
nx g s auth --project=shared-auth --flat
nx g interceptor auth --project=shared-auth --flat
nx g guard auth --implements='CanActivate' --no-interactive --project=shared-auth --flat
#nx g guard canLoadAuth --implements='CanLoad' --no-interactive --project=shared-auth --flat
#nx g guard auth --implements='CanActivate,CanLoad' --no-interactive --project=shared-auth --flat Can load no funciona con nx
git add *
git commit -m 'feat: generate auth feature'
echo "🏠 auth shared feature";
