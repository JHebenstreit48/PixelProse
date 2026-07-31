import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
