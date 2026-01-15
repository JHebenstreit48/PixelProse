import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StrideEngine = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/GameFrameworksAndEngines/StrideEngine';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Stride Engine" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StrideEngine;
