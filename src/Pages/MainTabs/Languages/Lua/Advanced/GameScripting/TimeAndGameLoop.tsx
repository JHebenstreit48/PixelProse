import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TimeAndGameLoop = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/GameScripting/TimeAndGameLoop';

  return (
    <>
      <PageLayout>
        <PageTitle title="Time & Game Loop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimeAndGameLoop;
