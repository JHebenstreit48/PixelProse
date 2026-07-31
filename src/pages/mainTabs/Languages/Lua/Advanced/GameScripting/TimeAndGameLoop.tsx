import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
