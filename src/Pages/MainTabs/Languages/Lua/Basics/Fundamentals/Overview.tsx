import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Overview = () => {
  const markdownFilePath = 'Languages/Lua/Basics/Fundamentals/Overview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
