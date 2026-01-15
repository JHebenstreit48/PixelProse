import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnityHub = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/GameFrameworksAndEngines/UnityHub';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Unity Hub" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnityHub;
