while :
  do 
    node --experimental-modules src/load-and-learn.mjs $@
    echo $@
done
