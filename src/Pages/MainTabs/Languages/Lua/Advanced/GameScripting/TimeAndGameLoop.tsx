import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
