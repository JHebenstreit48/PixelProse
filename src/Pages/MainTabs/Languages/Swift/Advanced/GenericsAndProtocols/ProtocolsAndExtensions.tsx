import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProtocolsAndExtensions = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/GenericsAndProtocols/ProtocolsAndExtensions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protocols & Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolsAndExtensions;
