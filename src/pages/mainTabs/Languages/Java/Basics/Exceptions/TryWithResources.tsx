import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
