import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StrideEngine = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/StrideEngine';

  return (
    <PageLayout>
      <Header />
      <PageTitle title="C# Tools - Stride Engine" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default StrideEngine;