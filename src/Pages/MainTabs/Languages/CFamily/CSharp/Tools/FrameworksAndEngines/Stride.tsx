import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StrideEngine = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/StrideEngine';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - Stride Engine" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default StrideEngine;