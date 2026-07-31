import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SpecFlow = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/Frameworks/SpecFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="SpecFlow (BDD)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpecFlow;
