﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL.Extensions;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models.Interfaces;

namespace DAL.Abstracts
{
    public abstract class BasicCrudDalAbstract<T> : IBasicCrudDal<T> where T : class, IBasicModel
    {
        /// <summary>
        /// Abstract to get IMapper
        /// </summary>
        /// <returns></returns>
        protected abstract IMapper GetMapper();
        
        /// <summary>
        /// Abstract to get database context
        /// </summary>
        /// <returns></returns>
        protected abstract DbContext GetDbContext();
        
        /// <summary>
        /// Abstract to get entity set
        /// </summary>
        /// <returns></returns>
        protected abstract DbSet<T> GetDbSet();

        /// <summary>
        /// Returns all enities
        /// </summary>
        /// <returns></returns>
        public virtual async Task<IEnumerable<T>> GetAll() => await GetDbSet().ToListAsync();

        /// <summary>
        /// Returns an entity given the id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual async Task<T> Get(int id) => await GetDbSet().FirstOrDefaultCacheAsync(x => x.Id == id);

        /// <summary>
        /// Saves an instance
        /// </summary>
        /// <param name="instance"></param>
        /// <returns></returns>
        public virtual async Task<T> Save(T instance)
        {
            GetDbSet().Add(instance);
            await GetDbContext().SaveChangesAsync();
            return instance;
        }

        /// <summary>
        /// Deletes enitity given the id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual async Task<T> Delete(int id)
        {
            var instance = GetDbSet().FirstOrDefaultCache(x => x.Id == id);

            if (instance != null)
            {
                GetDbSet().Remove(instance);
                await GetDbContext().SaveChangesAsync();
                return instance;
            }

            return null;
        }

        /// <summary>
        /// Handles update
        /// </summary>
        /// <param name="id"></param>
        /// <param name="instance"></param>
        /// <returns></returns>
        public virtual async Task<T> Update(int id, T instance)
        {
            var entity = GetDbSet().FirstOrDefaultCache(x => x.Id == id);
                
            if (entity != null)
            {
                // Being tracking
                GetDbContext().Update(entity);

                // Update
                GetMapper().Map(instance, entity);
                    
                // Save and dispose
                await GetDbContext().SaveChangesAsync();

                // Returns the updated entity
                return instance;
            }

            // Not found
            return null;
        }

        /// <summary>
        /// Handles manual update
        /// </summary>
        /// <param name="id"></param>
        /// <param name="modifyAction"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public virtual async Task<T> Update(int id, Action<T> modifyAction)
        {            
            var entity = GetDbSet().FirstOrDefaultCache(x => x.Id == id);
                
            if (entity != null)
            {
                // Update
                modifyAction(entity);
                    
                // Save and dispose
                await GetDbContext().SaveChangesAsync();

                // Returns the updated entity
                return entity;
            }

            // Not found
            return null;
        }
    }
}