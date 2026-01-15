import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpecFlow = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/Frameworks/SpecFlow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SpecFlow (BDD)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpecFlow;
