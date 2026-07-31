import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TryWithResources = () => {
  const markdownFilePath = 'Languages/Java/Basics/Exceptions/TryWithResources';

  return (
    <>
      <PageLayout>
        <PageTitle title="Try-with-Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TryWithResources;
