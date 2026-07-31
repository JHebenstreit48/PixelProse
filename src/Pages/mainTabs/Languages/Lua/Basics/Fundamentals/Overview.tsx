import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
