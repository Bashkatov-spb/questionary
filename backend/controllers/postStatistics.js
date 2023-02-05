const { Attempt, Statistic } = require('../db/models');

const postStatistics = async (req, res) => {
  const { statistics } = req.body;

  try {
    const newAttempt = await Attempt.create({
      userId: req.session.user,
      moduleId: statistics[0].moduleId,
    });
    const newStatistic = await Promise.all(
      statistics.map((statistic) => (
        Statistic.create({
          attemptId: newAttempt.id,
          questionId: statistic.questionId,
          rights: statistic.rights,
        })
      )),
    );
    res.status(201).json({ message: 'ok' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { postStatistics };
