﻿using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DAL.Extensions
{
    public static class EntityFrameworkCache
    {
        public static TEntity FirstOrDefaultCache<TEntity>(this DbSet<TEntity> queryable, Expression<Func<TEntity, bool>> condition) 
            where TEntity : class
        {
            return queryable.Local.FirstOrDefault(condition.Compile()) ?? queryable.FirstOrDefault(condition);
        }
        
        public static Task<TEntity> FirstOrDefaultCacheAsync<TEntity>(this DbSet<TEntity> queryable, Expression<Func<TEntity, bool>> condition) 
            where TEntity : class
        {
            var result = queryable.Local.FirstOrDefault(condition.Compile());
            
            return result != null ? Task.FromResult(result) : queryable.FirstOrDefaultAsync(condition);
        }
    }
}