import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DotNet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/DotNetFramework';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - .NET" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default DotNet;