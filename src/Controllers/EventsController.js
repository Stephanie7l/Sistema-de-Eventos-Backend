const EventsModel = require("../Models/EventsModel");

class EventsController {

async create (req, res) {
   try 
   {
      const event = await EventsModel.create(req.body);
      return res.status(200).json(usuario);

   } catch (error) 
   {
      return res.status(500).json({ message: error.message }); 
   }
}

async read (req, res) {
   try
   {
      const events = await EventsModel.find();
      return res.status(200).json(events);

   } catch (error) 
   {
      return res.status(500).json({ message: error.message }); 
   }  
}

async update (req, res) {
   try
   {
      const { id } = req.params;
      const eventfind = await EventsModel.findById(id);
      
      if (!eventfind) return res.status(404).json({ message: "Evento não encontrado!" });

      const event = await eventfind.set(req.body).save();
      
      return res.status(200).json(event);

   } catch (error) 
   {
      return res.status(500).json({ message: error.message }); 
   }  
}

async delete (req, res) {
   try
   {
      const { id } = req.params;

      const eventfind = await EventsModel.findById(id);
      
      if (!eventfind) return res.status(404).json({ message: "Evento não encontrado!" });

      await eventfind.deleteOne();
      
      return res.status(200).json({ message: "Evento deletado com sucesso!" });

   } catch (error) 
   {
      return res.status(500).json({ message: error.message }); 
   }
}
}

module.exports = new EventsController(); 
