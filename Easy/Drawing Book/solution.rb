def pageCount(n, p)
       if p == n || p == 1
        0
    end

    if (n/2 >= p)
        p/2
    # else if(n/2 == p)
    else 
        if (n%2 == 0 && n-p == 1)
            1
        else
            (n-p)/2
        end
    end
end