import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NETFramework = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/GameFrameworksAndEngines/NETFramework';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title=".NET Framework" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NETFramework;
