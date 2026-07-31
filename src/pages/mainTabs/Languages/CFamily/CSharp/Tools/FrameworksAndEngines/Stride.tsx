import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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