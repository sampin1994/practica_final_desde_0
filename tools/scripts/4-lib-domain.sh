echo "🚧 page libraries ";
echo " ✍ generate home page";
nx g library home --buildable --directory=domain --importPath=@ab/home --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='domain, page'
nx g c home --project=domain-home --flat --skipTests=false --skipSelector --type=Page
nx g c category-list  --project=domain-home
nx g s home --project=domain-home
nx g interface models/category --project=domain-home
git add *
git commit -m 'feat: generate home page'
echo " ✍ generate not-found page";
nx g library not-found --buildable --directory=domain --importPath=@ab/not-found --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='domain, page'
nx g c not-found --project=domain-not-found --flat --skipSelector --type=Page
git add *
git commit -m 'feat: generate not-found page'
echo " ✍ generate resource page";
nx g library resource --buildable --directory=domain --importPath=@ab/resource --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='domain, page'
nx g c resource --project=domain-resource --flat --skipTests=false --skipSelector --type=Page
nx g resolver resource --project domain-resource --skip-tests=true
nx g s resource --project=domain-resource
nx g interface models/resource --project=domain-resource
echo " ✍ generate category page";
nx g library category --buildable --directory=domain --importPath=@ab/category --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='domain, page'
nx g c category --project=domain-category --flat --skipTests=false --skipSelector --type=Page
nx g c resource-list  --project=domain-category
nx g s category --project=domain-category
nx g interface models/category --project=domain-category
nx g interface models/resource --project=domain-category
echo " generate resource-new page";
nx g library resource-new --buildable --directory=domain --importPath=@ab/resource-new --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='domain, page'
nx g c resource-new --project=domain-resource-new --flat --skipTests=false --skipSelector --type=Page
nx g c resource-new --project=domain-resource-new --type=Form
nx g s resource-new --project=domain-resource-new --flat
nx g interface models/category --project=domain-resource-new
nx g interface models/resource --project=domain-resource-new
git add *
git commit -m 'feat: generate resource-new page'
echo " ✍ generate search page";
nx g library search --buildable --directory=domain --importPath=@ab/search --prefix=ab --routing --lazy --parent='apps/www/src/app/core/core-routing.module.ts' --tags='domain, page'
nx g c search --project=domain-search --flat --skipTests=false --skipSelector --type=Page
nx g c results --project=domain-search
nx g s search --project=domain-search
nx g interface models/resource --project=domain-search
git add *
git commit -m 'feat: generate search page'
echo "🏠 page libraries";
echo "🚧 widget libraries ";
echo " ✍ generate search-box widget";
nx g library search-box --buildable --directory=domain --importPath=@ab/search-box --prefix=ab --tags='domain, widget'
nx g c search-box --project=domain-search-box --flat --skipTests=false --type=Widget --export=true
nx g c search-box --project=domain-search-box
nx g s search-box --project=domain-search-box
git add *
git commit -m 'feat: generate search-box widget'
echo "🏠 widget libraries";
